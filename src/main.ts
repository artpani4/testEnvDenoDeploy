// const a = Deno.env.toObject()
Deno.serve(() => {
    console.log("AAAA")
    return new Response("Hello, world!")});
// console.log(a)