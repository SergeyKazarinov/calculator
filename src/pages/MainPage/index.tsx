import { FC } from 'react';
import { Checkbox } from 'modules/checkBoxConstructor';
import { CalcElements } from 'modules/calcElements';
import { ConstructorElement } from 'modules/constructor';
import s from './style.module.scss';

interface MainPageProps {}

const MainPage: FC<MainPageProps> = () => (
  <section className={s.mainGrid}>
    <Checkbox />
    <CalcElements />
    <ConstructorElement />
  </section>
);

export default MainPage;
