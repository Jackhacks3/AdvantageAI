export const chatbotConfig = {
  // Your n8n webhook URL - replace with your actual webhook URL
  webhookUrl: 'https://your-n8n-instance.com/webhook/f6ae650e-8071-411e-b1a7-6317ea002fe3',
  
  // Chatbot behavior settings
  autoOpenDelay: 30000, // 30 seconds
  
  // Initial greeting message
  initialGreeting: "Hi there! 👋 I'm here to help you discover how AI can give your business an advantage. What's your biggest business challenge right now?",
  
  // Quick action buttons
  quickActions: [
    "Customer Service AI",
    "Lead Management", 
    "Administrative Tasks",
    "Marketing Automation"
  ],
  
  // Fallback message when API fails
  fallbackMessage: "I apologize, but I'm having trouble connecting right now. Please try again or contact us directly at info@advantageaisolutions.com",
  
  // Company branding
  branding: {
    name: "AI Assistant",
    company: "Advantage AI Solutions",
    supportEmail: "info@advantageaisolutions.com"
  },
  
  // UI customization
  ui: {
    primaryColor: "from-blue-600 to-purple-600",
    primaryColorHover: "from-blue-700 to-purple-700",
    accentColor: "orange-500",
    maxWidth: "w-96",
    maxHeight: "h-[600px]"
  }
};

export type ChatbotConfig = typeof chatbotConfig; 