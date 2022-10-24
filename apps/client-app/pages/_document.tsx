import Document, { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class ServerDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            // get all styles of components
            const collectStyles = sheet.collectStyles(<App {...props} />);
            return collectStyles;
          }
        });

      const initialProps = await Document.getInitialProps(ctx);
      // add styles to document
      const styles = [
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ];

      return {
        ...initialProps,
        styles
      };
    } finally {
      sheet.seal();
    }
  }
}
