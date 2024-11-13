// const a = Deno.env.toObject()
Deno.serve(() => {
    // console.log("AAAA")
    console.log(Deno.env.toObject())
    return new Response("Hello, world!")});
// console.log(a)