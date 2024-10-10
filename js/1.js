<script>
    
    const toggleButtons = document.querySelectorAll('.toggle-button');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
           
            const submenu = this.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle('active'); 
                class active
            }
        });
    });
</script>
