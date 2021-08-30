
const authToken = Deno.env.get('GITHUB_SECRET')

interface GithubTree {
  tree: {
    path: string
    type: string
    url: string
  }[]
}

async function makeRequest(url: URL | string, headers?: Headers): Promise<Response> {
  const urlObj = url instanceof URL ? url : new URL(url)
  return await fetch(urlObj, {
    headers: { ...(headers ?? {}), Authorization: `token ${authToken}` },
  })
}

async function traverseGithubTree(tree: GithubTree, path: string[]): Promise<GithubTree> {
  if (path.length === 0) return tree
  const maybeFile = tree.tree.find((file) => file.path === path[0])
  if (!maybeFile) throw new Error(`Cannot find ${JSON.stringify({path})}`)
  const {url} = maybeFile
  const nextTree = await (await makeRequest(url)).json()
  return await traverseGithubTree(nextTree, path.slice(1))
}

// TODO recurse and grab all the file path names to allow
async function getFileNames(directory: GithubTree, node: string): Promise<string[]> {
  const filenames = await Promise.all(
    directory.tree.map(async ({path, type, url}) => {
      const newPath = `${node}/${path}`
      if (type === 'tree') {
        const data = await (await makeRequest(url)).json()
        return await getFileNames(data, newPath)
      }
      return [newPath]
    })
  )
  return filenames.flatMap((arr) => arr)
}

async function getStaticFileAllowList() {
  const url = `https://api.github.com/repos/sullivansean27/psychess/branches/deploy`
  const deployBranch = await (await makeRequest(url)).json()

  const treeUrl = deployBranch.commit.commit.tree.url
  const treeFiles = await (await makeRequest(treeUrl)).json()
  const staticDirectory = await traverseGithubTree(treeFiles, ['web', 'server', 'public'])
  return await getFileNames(staticDirectory, '')
}

const STATIC_FILE_PATHS = await getStaticFileAllowList()

// where this file is imported, except ./public
const ROOT_URL = (function () {
  const splitUrl = import.meta.url.split('/')
  return splitUrl.slice(0, splitUrl.length - 1).join('/')
})()

const ASSET_URL = `${ROOT_URL}/public`

export async function getStaticFile(pathname: string): Promise<Response | null> {
  const isKnownStaticFile = STATIC_FILE_PATHS.includes(pathname)
  if (!isKnownStaticFile) {
    return null
  }
  const assetURL = `${ASSET_URL}${pathname}`
  console.log(`${pathname} => ${assetURL}`)
  return await makeRequest(assetURL)
}

export async function getFile(pathname: string): Promise<Response> {
  const assetURL = `${ROOT_URL}${pathname}`
  return await makeRequest(assetURL)
}
