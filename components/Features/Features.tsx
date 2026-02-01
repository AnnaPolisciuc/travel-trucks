import { Camper } from '@/types/camper';
import { FEATURES } from '@/config/features.config';
import { VEHICLE_DETAILS } from '@/config/vehicleDetails.config';
import css from './Features.module.css';

interface Props {
  camper: Camper;
}

export default function Features({ camper }: Props) {
  return (
    <div className={css.features}>
   
      <ul className={css.list}>
        {FEATURES.filter((item) => item.show(camper)).map(
          ({ key, label, icon }) => (
            <li key={key} className={css.item}>
              <svg className={css.icon} width="20" height="20">
                <use href={`/icons/sprite.svg#${icon}`} />
              </svg>
              <span>{label}</span>
            </li>
          )
        )}
      </ul>
      <h3 className={css.title}>Vehicle details</h3>

      <div className={css.grid}>
        {VEHICLE_DETAILS.map(({ label, value }) => (
          <div key={label} className={css.row}>
            <span>{label}</span>
            <span>{value(camper)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
