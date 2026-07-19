// Delete auto saved

document.addEventListener("DOMContentLoaded", () => {
const fields = document.querySelectorAll("input, select, textarea");
const resetButton = document.getElementById("btn-reset");

    if (resetButton) {
        resetButton.addEventListener("click", () => {
            sessionStorage.clear(); 
            fields.forEach(field => {
                if (field.tagName === "SELECT") {
                    field.selectedIndex = 0; 
                } else if (field.tagName === "INPUT") {
                    field.value = "";
                }
                else if (field.tagName === "TEXTAREA")
                {
                    field.value = "";
                }
                else {
                    field.value = "";
                }
            });
        });
    }
    else {
        console.log("Có lỗi nào đó khiến việc Reset dữ liệu form không thành công");
    }
});