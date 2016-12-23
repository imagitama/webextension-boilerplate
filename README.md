# WebExtension Boilerplate

Boilerplate for a WebExtension.

## Steps

1. Update your `README.md`, `LICENSE.md` and `manifest.json` files with correct information about your WebExtension.
2. Update `views/settings.html` and `js/settings.js` with any settings your WebExtensions will need.
3. Update the icons, Javascript and CSS.
4. Test in the browser of your choice.

## Common Permissions

* storage
* *://&#42;/&#42;
* notifications

## Notes

This WebExtension has been written for WebKit browsers in mind. All uses of the `browser` global variable are actually `chrome`. 
In future there will be some browser sniffing to detect Firefox and IE browsers.