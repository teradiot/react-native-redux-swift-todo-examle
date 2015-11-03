//
//  AppDelegate.swift
//  RNSwift
//
//  Created by tera on 2015/11/01.
//  Copyright © 2015年 Facebook. All rights reserved.
//

import Foundation
@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    var window: UIWindow?

    func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
        // let jsCodeLocation = NSBundle.mainBundle().URLForResource( "main", withExtension:"jsbundle");
        let jsCodeLocation = NSURL(string: "http://localhost:8081/index.ios.bundle?platform=ios&dev=true")
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "RNSwift", initialProperties: nil, launchOptions: launchOptions)

        self.window = UIWindow(frame: UIScreen.mainScreen().bounds)
        let rootViewController = UIViewController()
        rootViewController.view = rootView
        self.window?.rootViewController = rootViewController
        self.window?.makeKeyAndVisible()

        return true
    }
}
