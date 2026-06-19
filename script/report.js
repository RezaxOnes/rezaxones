document.addEventListener("DOMContentLoaded", () => {
    const fields = document.querySelectorAll("input, select");
    fields.forEach(field => {
        if (field.id) {
            const saved = sessionStorage.getItem(field.id);
            if (saved !== null) 
            { 
                field.value = saved;
            }
            field.addEventListener("input", () => {
            sessionStorage.setItem(field.id, field.value);
            });
        }
    });
});

    // 1. Xử lý bằng function
    
    function countInput(nameInputUser, nameUserCountView, limit)
    {
   
    const inputUser = document.getElementById(`${nameInputUser}`);
    const userCountView = document.getElementById(`${nameUserCountView}`);

    if (!inputUser || !userCountView) 
        { 
            return; 
        }

    inputUser.addEventListener('input', () => {
        userCountView.textContent = inputUser.value.length;
        if(inputUser.value.length > limit)
            {
                userCountView.style.color = "red";
            }
        else {
                userCountView.style.color = "black";
        }
    });
    }