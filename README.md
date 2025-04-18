## Free Customizable Package

`Common Things API` is an open-source package that looks forward in providing a developer-friendly experience when making network request as it provides tons of api and pre-configuration of each api that can be consumed with just a single line of code without having you to craft out a logical network request saving time and lines of code. A product of lots of commonly used apis as listed below:


- [Jsonplaceholder](https://jsonplaceholder.typicode.com/)
- [GitHub](https://docs.github.com/en/rest/repos)
- [Hackerrank JsonMock](#)
  - [Article Users](https://jsonmock.hackerrank.com/api/article_users)
  - [Transactions](https://jsonmock.hackerrank.com/api/transactions)
  - [Footbal Competition](https://jsonmock.hackerrank.com/api/football_competitions)
  - [Football Matches](https://jsonmock.hackerrank.com/api/football_matches)
- [IP Geolocation API](https://ip-api.com/)
- [Public IP](https://api.ipify.org/)
- [Recipe API](https://www.themealdb.com/api.php)

Let grow the list together by contributing. 

### Contributing

You’ll need to have Node 10.16.0 or later version on your local development machine (but it’s not required on the server). I recommend using the latest LTS version.

To create a new app, you have to:

Begin by 
1. Fork the repo
2. Clone this repository to establish your own local copy. This process is straightforward and ensures you have all the necessary files and resources at your fingertips. You can find step-by-step instructions in this helpful article: Cloning a [repository on GitHub.com](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository).
3. Run the app using the command `npm i`
4. Check the `src` folder to get on with the codebase.

## What's included

- `rollupjs` - The JavaScript module bundler

## Usage

You can re-use this for whatever you want or to build something cool with it.
## install package:
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

  - Using the `Get class` to fetch data.<br/>
  For instance, fetching `posts` from `jsonplaceholder api` 

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

## License

Licensed under the MIT license.

## Documentation

visit [documentation on common-things-api](https://certsoftt.github.io/common-things-api)
