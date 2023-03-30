const cardList = [
    {
        title: 'Tea', image: 'images/Tea.jpg', link: 'Flavoured Tea', description: 'Order Tea'
    },
    {
        title: 'Ice cream', image: 'images/Icecream.jpg', link: 'About Icecrea', description: 'Order an Icecream'
    }
];

const clickMe = () => {
    console.log('clickMe clicked');
}

const addCards = (items) => {
    console.log(items);
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align" style="background-color: royalblue;"> <div class="card medium"   style="background-color: lightcyan;"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+ item.image +'"></img></div><div class="card-content"><span class="card-title activator grey-text text-darken-4">'+ item.title +'<i class="material-icons right">more_vert</i></span><p><a href="#">Flavoured item</a></p></div><div class="card-reveal"><span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span><p class="card-text">'+item.description+'</p></div></div></div>';
        $('#card-section').append(itemToAppend);
    });
}

const submitForm = () => {
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.email = $('#email').val();
    formData.password = $('#password').val();

    console.log('form data: ', formData);
}

$(document).ready(function(){
    $('.materialboxed').materialbox();
    $('.modal').modal();

    addCards(cardList);
    $('#formSubmit').click(()=>{
        submitForm();
    })
});