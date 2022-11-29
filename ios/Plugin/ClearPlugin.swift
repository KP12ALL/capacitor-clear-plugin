import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(ClearPlugin)
public class ClearPlugin: CAPPlugin {
    private let implementation = Clear()

    @objc func clearCache(_ call: CAPPluginCall) {
        call.resolve([
            "value": implementation.echo("Clear cache is not implemented on ios")
        ])
    }
}
