export default function AsideData({ text, name }) {
  return (
    <p className="pb-1">
      <b>{text}:</b> {name}
    </p>
  );
}
