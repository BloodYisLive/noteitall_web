import localFont from "@next/font/local";
export const notoSans = localFont({
  src: [
    {
      path: "../assets/noto-sans/NotoSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/noto-sans/NotoSans-italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/noto-sans/NotoSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/noto-sans/NotoSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/noto-sans/NotoSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--noto-font",
});
