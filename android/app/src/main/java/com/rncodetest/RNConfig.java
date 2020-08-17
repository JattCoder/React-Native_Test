package com.rncodetest;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class RNConfig extends ReactContextBaseJavaModule {
    //constructor
    public RNConfig(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    public String ServiceKey = "ergregregreg";

    @Override
    public String getName() {
        return "ToastExample";
    }

    @ReactMethod
    public void show(String message) {
       Toast.makeText(getReactApplicationContext(), message).show();
    }
}