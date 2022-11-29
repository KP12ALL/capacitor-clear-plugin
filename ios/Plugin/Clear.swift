import Foundation

@objc public class Clear: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
