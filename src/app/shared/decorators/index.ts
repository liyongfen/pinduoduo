export function Emoji(){
    return (target: object, key: string)=>{
        let val = target[key];
        const setter = (value: string)=> {
            val =  `😁${value}😁`
        };
        const getter = ()=> {
            return val;
        }
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        })
    }
}

export function Confirmable(message: string){
    return(target: object, key: string, descriptor: PropertyDescriptor)=> {
        const original = descriptor.value;
        descriptor.value = function(...args: any){
            const allow = window.confirm(message);
            if(allow){
                const result = original.apply(this, args);
                return result;
            }
            return null
        }
        return descriptor;
    }
}