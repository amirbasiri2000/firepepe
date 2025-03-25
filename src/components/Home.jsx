"use client"

export default function Home() {
  return (
    <div className="container">
      {/* باکس ابزارک خالی برای جانمایی */}
      <style jsx>{`
        .container {
          max-width: 349px;
          margin: 0 auto;
          padding: 1rem;
          background: rgb(36, 30, 13);
          border-radius: 16px;
          border: 3.5px solid rgb(255, 255, 255);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
          height: auto;
          min-height: 550px;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
      `}</style>
    </div>
  );
}