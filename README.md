# jalil website

## publishing

1. build the site `npm run dev`
2. start ipfs `ipfs daemon`
3. add the build `ipfs add -r .vitepress/dist` and copy the CID of the site
4. publish the build `ipfs name publish {CID} --key=jalil`
