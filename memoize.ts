type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    const results = {}
    return function(...args) {
        if (Object.keys(args)) {
            return results.args
        } else {
        
        }
    }
}

