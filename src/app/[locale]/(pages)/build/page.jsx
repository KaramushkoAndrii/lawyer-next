// 1. Метаданные экспортируем как именованную константу (НЕ default)
export const metadata = {
  title: "Стройка",
};

// 2. Сам компонент ОБЯЗАТЕЛЬНО должен быть export default function
export default function BuildPage() {
  return (
    <div>
      <h1>Страница Стройки</h1>
      <p>Здесь будет контент...</p>
    </div>
  );
}
