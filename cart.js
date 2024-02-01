// Export nr 1
export function calculate(){
    console.log("Using calculate")
}

export default function default_calculate(){
    console.log("Using default")
}

// Export nr 2
function calculate(){
    console.log("Using calculate")
}

function calculate_hypothenuse(height, length){
Math.sqrt(height**2 + length**2)
}

export { calculate, calculate_hypothenuse }