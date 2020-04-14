const Mutations = {
   async createItem(parent, args, ctx, info) {
        const item = await ctx.db.mutation.createItem({
            data: {
                ...args
            },
        }, info)

        console.log("item", item);
    
        return item;
    }
    // createDog(parent, args, ctx, info) {
    //     global.dogs = global.dogs || [];
    //     // create a dog
    //     const newDog = { name: args.name};
    //     global.dogs.push(newDog)
    //     return newDog;
    //     console.log(args);
    // }
};

module.exports = Mutations;
