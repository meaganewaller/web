export default function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-turquoise-400 dark:border-turquoise-700 sticky border-b-2 border-solid bg-blue-100 text-blue-700 dark:bg-blue-800">
      <header className="font-pixel bg-turquoise-300 border-turquoise-700 dark:bg-turquoise-700 sticky border-b-2 border-dashed p-2 text-center text-xl uppercase text-pink-500 dark:border-pink-300 dark:text-blue-800">
        {title}
      </header>
      <div className="h-auto overflow-auto text-blue-700">{children}</div>
    </div>
  );
}
