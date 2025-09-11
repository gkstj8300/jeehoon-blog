import style from './Blob.module.scss';

export default function Blob() {

  return (
    <div className={style.container} aria-hidden="true">
      <div className={style.blobFirst}>
        <div className={style.blobInner}></div>
      </div>

      <div className={style.blobSecond}>
        <div className={style.blobInner}></div>
      </div>
    </div>
  );
}
Blob.displayName = 'Blob';