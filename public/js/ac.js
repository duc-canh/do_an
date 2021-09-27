function toggle(){
        var x = $("#x").val();
        if(x != ""){
                var blur = document.getElementById('blur');
                blur.classList.toggle('active');
                var popup = document.getElementById('popup');
                popup.classList.toggle('active')
        };


};
