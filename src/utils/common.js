export const formatDurationSecond = (duration) => {
  const min = `${Math.floor(duration / 60)}`.padStart(2, '0');
  const sec = `${Math.round(duration % 60)}`.padStart(2, '0');
  return `${min}:${sec}`;
};

export const formatDurationMillisecond = (duration) => formatDurationSecond(duration / 1000);
