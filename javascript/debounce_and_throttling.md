## Debounce and Throttling

### Debounce

Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
```js
function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args);
    }, delay)
  }
}
```

### Throttling


Throttling will delay executing a function. It will reduce the notifications of an event that fires multiple times.
Debouncing will bunch a series of sequential calls to a function into a single call to that function. It ensures that one notification is made for an event that fires multiple times

Explanation by use case:

Search bar- Don't want to search every time user presses key? Want to search when user stopped typing for 1 sec. Use debounce 1 sec on key press.

Shooting game- Pistol take 1 sec time between each shot but user click mouse multiple times. Use throttle on mouse click.

Reversing their roles:

Throttling 1 sec on search bar- If users types abcdefghij with every character in 0.6 sec. Then throttle will trigger at first a press. It will will ignore every press for next 1 sec i.e. bat .6 sec will be ignored. Then c at 1.2 sec will again trigger, which resets the time again. So d will be ignored and e will get triggered.

Debouncing pistol for 1 sec- When user sees an enemy, he clicks mouse, but it will not shoot. He will click again several times in that sec but it will not shoot. He will see if it still has bullets, at that time (1 sec after last click) pistol will fire automatically.
