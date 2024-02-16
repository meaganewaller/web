const loadingMessages = [
  'pushing pixels',
  'satellites are moving into position',
  'the gods contemplate your fate',
  'warming up the processors',
  'transporting you into the future',
  'communing with nature',
  'engaging self-awareness circuits',
  'downloading more pixels',
  'downloading more internet',
  'preparing for hyperspace jump',
  'waiting for magic to happen',
  'locating infinite improbability drive',
  'traveling at the speed of light',
  'traveling at the speed of thought',
  'traveling at the speed of imagination',
  'traveling at the speed of love',
  'reassuring the sprites',
  'reassuring the gnomes',
  'reassuring the faeries',
  'reassuring the elves',
  'reassembling atoms',
  'transmitting thoughts to the mothership',
  'transmitting thoughts to the hive',
  'transmitting thoughts to the collective',
];

export default function Loading() {
  return (
    <div className="loading p-[20%] text-center">
      <h2 className="font-pixel m-0 text-xs uppercase tracking-wide text-lime-600">
        {loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}
      </h2>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}
