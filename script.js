const buttons = document.querySelectorAll(".copy-btn");
const toast = document.getElementById("toast");

buttons.forEach((button) => {

    button.addEventListener("click", async () => {

        const command = button.dataset.command;

        try {
            await navigator.clipboard.writeText(command);

            const originalText = button.textContent;

            button.textContent = "Copied!";

            toast.textContent = "Command copied!";
            toast.classList.add("show");

            setTimeout(() => {
                button.textContent = originalText;
                toast.classList.remove("show");
            }, 1500);

        } catch (error) {
            console.error("Copy failed:", error);
        }

    });

});