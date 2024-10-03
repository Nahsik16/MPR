const API = {
    GetChatbotResponse: async (message) => {
        try {
            const response = await fetch("http://localhost:8000/chat/", {
                // Update with actual backend URL if different
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }), // Send the user message in the request body
            })

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }

            const data = await response.json()
            console.log(data.response)

            return data.response // Assuming the FastAPI returns the bot's response in the `response` field
        } catch (error) {
            return "Testing when api is down"
            // console.error("Error fetching chatbot response:", error)
            // throw error
        }
    },
}

export default API
