function isHaiku(text) {
    return text
      .replace(/([aeiouy][b-df-hj-np-xz]+)e\b/ig, '$1 ')
      .split('\n')
      .map(l => (l.match(/[aeiouy]+/ig) || []).length)
      .join('') === '575';
  }

  export default isHaiku