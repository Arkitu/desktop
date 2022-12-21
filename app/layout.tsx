import styles from "./styles.module.scss";
import "./global.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={styles.root}>
        {children}
      </body>
    </html>
  )
}
