const zod = require('zod');

const createTodo = zod.object({
    title: zod.string().min(1),
    description: zod.string().min(1),
}); 

const updateTodo = zod.object({
    id: zod.string(),
    title: zod.string().optional(),
    description: zod.string().optional(),
    done: zod.boolean().optional()
});

module.exports = {
    createTodo,
    updateTodo
};