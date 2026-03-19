# سلوان (Solwan) - Your Spiritual Companion

<div align="center">

![Solwan Logo](https://img.shields.io/badge/Solwan-رفيقك_الروحي-green?style=for-the-badge&logo=islamic)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**سلوان** is an intelligent spiritual companion web application that helps users understand their emotional states and provides relevant Islamic Hadith (Prophetic traditions) based on their feelings.

[English](#english) | [العربية](#العربية)

---

## English

### About

Solwan (meaning "comfort" or "solace" in Arabic) is a modern web application that bridges traditional Islamic wisdom with contemporary AI technology. When you share how you're feeling, the app uses OpenAI's GPT-4o-mini to classify your emotion and presents you with an appropriate Hadith from a curated database.

### Features

- **AI-Powered Emotion Detection**: Uses GPT-4o-mini to understand your feelings expressed in Arabic
- **Curated Hadith Database**: 12 authentic Hadiths from trusted Islamic sources
- **Arabic-First Design**: Full right-to-left (RTL) support with beautiful Arabic typography
- **Mobile-First**: Responsive design optimized for all devices
- **Beautiful UI**: Soft, calming color palette with smooth animations

### Emotion Categories

- الحزن (Sadness)
- القلق (Anxiety)
- الخوف (Fear)
- الفرح (Happiness)
- الغضب (Anger)
- الأمل (Hope)
- الامتنان (Gratitude)

### Tech Stack

| Category   | Technology                                    |
| ---------- | --------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org/)             |
| Language   | [TypeScript](https://www.typescriptlang.org/) |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com/)    |
| AI         | [OpenAI](https://openai.com/)                 |
| Deployment | [Vercel](https://vercel.com/)                 |

### Getting Started

#### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun
- OpenAI API key

#### Installation

1. Clone the repository:

```bash
git clone https://github.com/Thamir-011/solwan.git
cd solwan
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable         | Description                         | Required |
| ---------------- | ----------------------------------- | -------- |
| `OPENAI_API_KEY` | Your OpenAI API key for GPT-4o-mini | Yes      |

### Project Structure

```
solwan/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Main homepage
│   │   ├── about/page.tsx     # About page
│   │   └── api/get-hadith/    # API endpoint
│   ├── agents/                # AI agents (LangChain)
│   ├── data/                  # Hadith database
│   └── utils/                 # Utility functions
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Dependencies
```

### API Endpoints

#### POST /api/get-hadith

Classifies user emotion and returns a matching Hadith.

**Request:**

```json
{
  "feeling": "أشعر بالحزن الشديد"
}
```

**Response:**

```json
{
  "emotion": "sadness",
  "hadith": {
    "text": "عَجَبًا لأَمْرِ المُؤْمِنِ...",
    "narrator": "صهيب الرومي",
    "source": "صحيح مسلم"
  }
}
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Deployment

Deploy to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Thamir-011/solwan)

**Note:** Set your `OPENAI_API_KEY` environment variable in the Vercel dashboard.

---

## العربية

### حول سلوان

سلوان هو رفيقك الروحي الذكي، يساعدك على فهم مشاعرك ويقدم لك الأحاديث النبوية الشريفة المناسبة لحالتك.

### المميزات

- **ذكاء اصطناعي متطور**: يستخدم GPT-4o-mini لفهم مشاعرك
- **قاعدة بيانات الأحاديث**: 12 حديثاً نبوياً صحيحاً
- **دعم اللغة العربية**: تصميم من اليمين لليسار مع خطوط عربية جميلة
- **تصميم متجاوب**: يعمل على جميع الأجهزة

### التقنيات المستخدمة

- Next.js 16 - إطار العمل
- TypeScript - لغة البرمجة
- Tailwind CSS 4 - التصميم
- OpenAI API - الذكاء الاصطناعي
- LangChain - إدارة وكلاء الذكاء الاصطناعي

---

## Security

- Never commit your `.env` file or any file containing API keys
- Use environment variables for all secrets
- For production, consider using a secrets manager

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ for the Muslim community

</div>
