// Order list processing


function processOrderList(orderList, orderId, state) {
    // Write your code here
    if(state !== "Processing" && state !=="Delivered"){
        throw new Error("Invalid state argumrnt");
    }
    
    const result = [];
    for(const order of orderList){
        if(order.orderId === orderId){
            order.state = state;
        }
        result.push(order);
    }
    return result;
    
}
    const oderList = [
        {orderId:123,state:"Processing",items:["apple","banana"]},
        {orderId: 124, state: "Delivered", items:["carrot"]},
        {orderId:125, state:"Processing", items:["apple","carrot"]},
    ];
    const result = processOrderList(orderList, 123,"Delivered");
    console.log(result);