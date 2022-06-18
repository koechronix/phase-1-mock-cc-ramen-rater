// write your code here

fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(data =>{
    //console.log(data)
    renderRamen(data)

})

const ramemMenu = document.querySelector("#ramen-menu")

function renderRamen(data){
    data.forEach(ramens => {
        //console.log(ramens)
        const img = document.createElement("img")
        img.src = ramens.image
        ramemMenu.append(img)

        img.addEventListener('click', (e) => {
            e.preventDefault();
            const detailImage = document.querySelector("detail-image")
            detailImage.src = ramens.image
            const name = document.querySelector(".name")
            name.textContent = ramens.name

            const restaurant = document.querySelector(".restaurant")
            restaurant.textContent = ramens.restaurant

            const ratingDisplay = document.querySelector("#rating-display")
            ratingDisplay.textContent = ramens.rating
            const commentDisplay = document.querySelector("#comment-display")
            commentDisplay.textContent = ramens.comment 

            const form = document.querySelector("#new-ramen")

            const newNameInput = document.querySelector("#new-name")
            const newrestaurantInput = document.querySelector("#new-restaurant")
            const newImageInput = document.querySelector("#new-image")
            const newRatingInput = document.querySelector("#new-rating")
            const newCommentInput = document.querySelector("#new-comment")

            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const newRamen ={
                    name: newNameInput.value,
                    restaurant: newrestaurantInput.value,
                    image : newNameInput.value,
                    rating : newRatingInput.value,
                    comment : newCommentInput.value


                }
                renderRamen([newRamen])
            })
        })

    })

}

function ramenForm() {

    const form = document.querySelector("new-ramen")
    const newName = document.querySelector("#new-ramen")

    //const newRestaurant 
    const newImage = document.querySelector("#new-image")
    const newRating = document.querySelector("#new-rating")
    const newComment =document.querySelector("#new-comment")

    //list elements
    const ratingDisplay = document.querySelector("#rating-Display")
    const commentDisplay = document.querySelector("#comment-display")

    form.addEventListener("submit", (e) => {
        e.preventDefault();

         // const newName
        const newName = document.createElement("p")
        createName.innerText = newName.value

        //const new restaurant name

        const newRestaurant = document.querySelector("#new-restaurant").value

        //create image
        const img = document.createElement("img")
        img.src = newImage.value

        //img rating
        const rating = document.createElement("p")
        rating.textContent = newRating.value

        ramemMenu.append(createName,newRestaurant, img)
        ratingDisplay.appendChild(rating)
    
    })

    


}
