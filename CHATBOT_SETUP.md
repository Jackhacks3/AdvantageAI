# AI Chatbot Integration Guide

## Overview
Your Advantage AI Solutions website now includes a professional AI chatbot that integrates with your n8n workflow. The chatbot appears as a floating widget in the bottom-right corner and provides lead qualification and customer support.

## 🔧 Configuration

### 1. Update Webhook URL
Edit `src/config/chatbot.ts` and replace the webhook URL with your actual n8n instance URL:

```typescript
export const chatbotConfig = {
  // Replace with your actual n8n webhook URL
  webhookUrl: 'https://your-n8n-instance.com/webhook/f6ae650e-8071-411e-b1a7-6317ea002fe3',
  // ... other settings
};
```

### 2. Customize Messages
You can customize the chatbot's behavior by editing the configuration:

```typescript
// Initial greeting when chatbot opens
initialGreeting: "Hi there! 👋 I'm here to help you discover how AI can give your business an advantage. What's your biggest business challenge right now?",

// Quick action buttons
quickActions: [
  "Customer Service AI",
  "Lead Management", 
  "Administrative Tasks",
  "Marketing Automation"
],

// Auto-open delay (in milliseconds)
autoOpenDelay: 30000, // 30 seconds
```

### 3. Branding Customization
Update the branding information:

```typescript
branding: {
  name: "AI Assistant",
  company: "Advantage AI Solutions", 
  supportEmail: "info@advantageaisolutions.com"
}
```

## 🚀 Features

### Core Functionality
- **Auto-open**: Opens automatically after 30 seconds (first visit only)
- **Persistent sessions**: Remembers if user has interacted before
- **Mobile responsive**: Adapts to different screen sizes
- **Minimize/maximize**: Users can minimize the chat window
- **Typing indicators**: Shows when AI is processing
- **Quick actions**: Pre-defined buttons for common inquiries

### Integration with n8n
The chatbot sends the following data to your n8n webhook:

```json
{
  "chatInput": "User's message",
  "sessionId": "unique_session_id",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

Expected response format from n8n:
```json
{
  "output": "AI response message"
}
```

## 📱 User Experience

### Desktop
- Floating chat button in bottom-right corner
- Expandable to 384px × 600px chat window
- Smooth animations and transitions

### Mobile
- Responsive design adapts to screen size
- Touch-friendly interface
- Maintains functionality on all devices

## 🔒 Privacy & Data

### Data Collection
The chatbot collects:
- User messages
- Session IDs (for conversation continuity)
- Timestamps
- Basic interaction analytics

### Storage
- Session data stored in browser localStorage
- Conversation data sent to your n8n workflow
- No sensitive data stored locally

## 🛠 Technical Details

### Dependencies
The chatbot uses:
- React hooks for state management
- Lucide React for icons
- Tailwind CSS for styling
- Native fetch API for n8n communication

### File Structure
```
src/
├── components/
│   └── Chatbot.tsx          # Main chatbot component
├── config/
│   └── chatbot.ts           # Configuration settings
└── App.tsx                  # Integration point
```

## 🔧 Customization Options

### Styling
You can customize the appearance by editing the Tailwind classes in `Chatbot.tsx`:

```typescript
// Primary colors
className="bg-gradient-to-r from-blue-600 to-purple-600"

// Accent colors  
className="bg-orange-500"

// Sizing
className="w-96 h-[600px]"
```

### Behavior
Modify behavior in `src/config/chatbot.ts`:

```typescript
// Change auto-open timing
autoOpenDelay: 45000, // 45 seconds

// Modify quick actions
quickActions: [
  "Schedule Consultation",
  "Pricing Information",
  "Case Studies",
  "Technical Support"
]
```

## 🧪 Testing

### Local Testing
1. Start your development server: `npm run dev`
2. Open the website in your browser
3. Wait 30 seconds for auto-open or click the chat button
4. Test message sending (will show fallback message without n8n connection)

### Production Testing
1. Update the webhook URL in configuration
2. Deploy your website
3. Test full conversation flow with your n8n workflow

## 🚨 Troubleshooting

### Common Issues

**Chatbot doesn't appear:**
- Check console for JavaScript errors
- Verify the component is imported in App.tsx

**Messages not sending:**
- Verify webhook URL is correct
- Check n8n workflow is active
- Check browser network tab for failed requests

**Styling issues:**
- Ensure Tailwind CSS is properly configured
- Check for CSS conflicts with existing styles

### Error Handling
The chatbot includes built-in error handling:
- Network failures show fallback message
- Invalid responses are handled gracefully
- User can always retry sending messages

## 📈 Analytics

### Tracking Events
The chatbot can be extended to track analytics:

```typescript
// Add to sendMessage function
const trackChatEvent = (action: string, data: any) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: 'Chatbot',
      event_label: data
    });
  }
};
```

### Metrics to Track
- Chat opens
- Messages sent
- Quick action clicks
- Session duration
- Conversion events

## 🔄 Updates & Maintenance

### Regular Updates
- Monitor n8n workflow performance
- Update greeting messages seasonally
- Review and optimize quick actions
- Check for new feature requests

### Version Control
- Keep chatbot configuration in version control
- Document any customizations
- Test thoroughly before deploying changes

## 📞 Support

For technical support with the chatbot integration:
- Check this documentation first
- Review browser console for errors
- Test n8n webhook independently
- Contact development team if issues persist

---

**Note**: Remember to replace the placeholder webhook URL with your actual n8n instance URL before deploying to production! 