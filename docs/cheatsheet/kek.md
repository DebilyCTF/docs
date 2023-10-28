# Support

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

:::note

The snapshot is directly scoped to the data you render – in our example the `<Link>` component with `page` prop passed to it. This implies that even if any other file has missing props (say, `App.js`) in the `<Link>` component, it will still pass the test as the test doesn't know the usage of `<Link>` component and it's scoped only to the `Link.js`. Also, rendering the same component with different props in other snapshot tests will not affect the first one, as the tests don't know about each other.

:::

:::info

More information on how snapshot testing works and why we built it can be found on the [release blog post](/blog/2016/07/27/jest-14). We recommend reading [this blog post](http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/) to get a good sense of when you should use snapshot testing. We also recommend watching this [egghead video](https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074) on Snapshot Testing with Jest.

:::
