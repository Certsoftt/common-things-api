## Documentation

***Common Things API*** is an open-source package that looks forward in providing a developer-friendly experience when making network request as it provides tons of api and pre-configuration of each api that can be consumed with just a single line of code without having you to craft out a logical network request saving time and lines of code. A product of lots of commonly used apis as listed below:


- [Jsonplaceholder](#fetching-posts-from-jsonplaceholder-api)
- [GitHub](#fetching-repos-from-git-repo-api)
- [Movie API](#fetching-movies-from-yts-api)

Let grow the list together by contributing. 

## Usage

You can re-use this for whatever you want or to build something cool with it.

## Install Package:
#### Install from the command line:
```suggestion
$ npm install @certsoftt/common-things-api@1.0.0
or
$ npm i common-things-api
```
#### Install via package.json:
```suggestion
"@certsoftt/common-things-api": "1.0.0"
```

## GET Class
Using the `Get class` to fetch data.<br/>

### Fetching `Posts` from `JSONPLACEHOLDER Api` 

  ```js
  import {Get} from "common-things-api"
  //or import {Get} from "@certsoftt/common-things-api"

  let posts = new Get("posts").api()
  ```

  this fetches posts from jsonplaceholder api. The `api()` accepts 1 optional argument which is your endpoint query. For instance, fetching a single post with an `id` of `50`

  ```js
  let post = new Get("posts").api("?id=50")
  ``` 
  or programmatically:

  ```js
  let id = value // dynamic value
  let post = new Get("posts").api(`?id=${id}`)
  ```

### Fetching `Repos` from `GIT Repo api` 

  ```js
  import {Get} from "common-things-api"
  //or import {Get} from "@certsoftt/common-things-api"

  let repos = new Get("repos").api(params="certsoftt")
  ```

  this fetches repos from git repo api. The `api()` accepts 1 required argument which is your github username *** params="certsoftt" ***. 
  With endpoints, for instance fetching repos with language type "typescript"

    ```js
  import {Get} from "common-things-api"
  //or import {Get} from "@certsoftt/common-things-api"

  let repos = new Get("repos").api("?language=TypeScript","certsoftt")
  ```
  or programmatically:

  ```js
  let language = value // dynamic value
  let post = new Get("repos").api(`?language=${language}`,"certsoftt")
  ```

### Fetching `Movies` from `YTS Api` 

  ```js
  import {Get} from "common-things-api"
  //or import {Get} from "@certsoftt/common-things-api"

  let repos = new Get("movies").api()
  ```

  this fetches movies from yts api. The `api()` accepts 1 optional argument which is your endpoint.

  Fetching a single movie

    ```js
  import {Get} from "common-things-api"
  //or import {Get} from "@certsoftt/common-things-api"

  let repos = new Get("movies").api("?movie_id=1&with_images=true&with_cast=true")
  ```
  or programmatically:

  ```js
  let id = value // dynamic value
  let post = new Get("repos").api(`?movie_id=${id}&with_images=true&with_cast=true`)
  ```