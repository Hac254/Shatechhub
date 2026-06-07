// Renders structured data as a <script> tag on the server
// Reusable: pass any schema.org object to it

interface JsonLdProps {
    data: Record<string, unknown>
  }
  
  export function JsonLd({ data }: JsonLdProps) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    )
  }