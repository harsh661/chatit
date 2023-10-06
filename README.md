# ChatIt - Real-Time Chat App

ChatIt is a real-time chat application built with Next.js, allowing users to have seamless conversations using text and multimedia messages. This app is designed to provide an easy and engaging chat experience for both individuals and groups.

## Features

- Real-time chat functionality using WebSockets.
- Text and multimedia messaging support (images, videos, documents).
- User authentication and registration system.
- User profiles with avatars.
- Responsive design for both mobile and desktop.
- Emoji support for adding fun and expression to your messages.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/harsh661/chatit.git
```

2. Navigate to the project directory:

```bash
cd chatit
```

3. Install the dependencies:

```bash
npm install
```

4. Create a .env.local file in the root directory and add the following environment variables:

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_PUSHER_KEY=
NEXT_PUBLIC_PUSHER_APP_SECRET=
NEXT_PUBLIC_PUSHER_APP_ID=
```

5. Start the development server:

```bash
npm run dev
```
Open your browser and visit `http://localhost:3000` to use ChatIt locally.

## Contributing

We welcome contributions to improve ChatIt. Feel free to open issues, submit pull requests, or suggest new features.
