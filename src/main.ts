// const a = Deno.env.toObject()
Deno.serve(() => {
    // console.log("AAAA")
    console.log(Deno.env.toObject())
    return new Response("Hello, world!")});
// console.log(a)

// {
//     "entryPointUrl": "main.ts",
//     "importMapUrl": null,
//     "lockFileUrl": null,
//     "compilerOptions": null,
//     "assets": {
//       "main.ts": {
//         "kind": "file",
//         "content": "",
//         "encoding": "utf-8"
//       }
//     },
//     "envVars": {
//       "MY_ENV": "hey222"
//     },
//     "domains": [
//       "{project.name}.deno.dev"
//     ],
//     "requestTimeout": null,
//     "permissions": {
//       "net": null
//     },
//     "description": "My first deployment"
//   }



//   {
//     "id": "z9nxp1atm7yd",
//     "projectId": "fa842317-75ed-4e2a-a11c-7e041dc67b70",
//     "description": "My first deployment",
//     "status": "success",
//     "domains": [
//       "env-integration.deno.dev"
//     ],
//     "databases": {},
//     "requestTimeout": null,
//     "permissions": {
//       "net": null
//     },
//     "createdAt": "2024-11-13T16:54:26.753473Z",
//     "updatedAt": "2024-11-13T16:54:31.541254Z"
//   }


//   {
//     "envVars": {
//       "MY_ENV": "hey3322332",
//       "ENV_TO_BE_DELETED": null
//     },
//    "domains": [
//         "env-integration.deno.dev"
//       ],
//      "databases": {
//         "default": "ffc86ba0-9b84-4d09-a758-16f633b3f608"
//      },
//       "requestTimeout": null,
//       "permissions": {
//         "net": null
//       },
//     "description": "Updated description"
//   }