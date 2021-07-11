export const Rating = (number) => {
  const stars = [];
  for (let i = 0; i < number; i++) {
    stars.push(<span>★</span>);
  }

  return <div>{stars}</div>;
};
