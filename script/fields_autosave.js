// Auto saved

document.addEventListener("DOMContentLoaded", () => {
    const fields = document.querySelectorAll("input, select, textarea");
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