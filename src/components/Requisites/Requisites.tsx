import React from 'react'
import { CopyButton } from '../CopyButton';
import ie from '../../data/individualEntrepreneur.json';
import { createSchedule } from '../../helpers/сreateSchedule';
import modules from '../../data/onlineModuleSchedule.json';
import practices from '../../data/onlinePracticeSchedule.json';
import retreats from '../../data/onlineRetreatSchedule.json';

const Requisites: React.FC = () => {

  const nextGropuDate = new Date(createSchedule(modules, practices,retreats).filter(group => group.type === 'module')[0].startDate);
  const nextGrupDateToPrint = `${nextGropuDate.getDate().toString().padStart(2, '0')}.${(nextGropuDate.getMonth() + 1).toString().padStart(2, '0')}`

  return (
    <div className='text-left w-max mt-2 mx-auto px-4 text-gray-600' style={{ width: '100vw', maxWidth:'450px', wordWrap: 'break-word' }}>
    ВАЖЛИВО:
    <br/>
    - Сплата тільки с приватної картки від приватної особи
    <br/>
    - ПРАВИЛЬНО ВКАЗАТИ ПРИЗНАЧЕННЯ ПЛАТЕЖУ
    <br/>
    - Після оплати пришліть, будь ласка, скріншот квитанції 
    <br/><br/>
    {ie.recipient} <CopyButton value={ie.recipient} />
    <br />
    IBAN: {ie.iban} <CopyButton value={ie.iban} />
    <br />
    ІПН/ЄДРПОУ: {ie.id} <CopyButton value={ie.id} />
    <br />
    Акціонерне товариство: {ie.bank}
    <br />
    МФО: {ie.mfo} <CopyButton value={ie.mfo} />
    <br />
    ОКПО Банку: {ie.okpo} <CopyButton value={ie.okpo} />
    <br />
    🔸Призначення платежу:
    {` "За навчання ${nextGrupDateToPrint}"`} <CopyButton value={`За навчання ${nextGrupDateToPrint}`} /> 
  </div>
  )
}

export default Requisites;