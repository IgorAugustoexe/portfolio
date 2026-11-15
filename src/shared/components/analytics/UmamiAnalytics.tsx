import Script from "next/script";

export function UmamiAnalytics() {
  return (
    <Script
      id="umami-analytics"
      src="https://cloud.umami.is/script.js"
      strategy="afterInteractive"
      data-website-id="3f9fdcb2-e60f-4dd4-ae23-34c40110c1ef"
      data-domains="igoraugusto.dev,www.igoraugusto.dev"
      data-exclude-search="true"
      data-exclude-hash="true"
    />
  );
}
