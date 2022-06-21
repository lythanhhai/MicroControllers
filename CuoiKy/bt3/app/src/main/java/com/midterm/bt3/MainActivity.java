package com.midterm.bt3;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothManager;
import android.bluetooth.le.AdvertiseCallback;
import android.bluetooth.le.AdvertiseData;
import android.bluetooth.le.AdvertiseSettings;
import android.bluetooth.le.BluetoothLeAdvertiser;
import android.content.pm.PackageManager;
import android.os.Build;
import android.os.Bundle;
import android.os.ParcelUuid;
import android.util.Log;
import android.view.View;

import com.midterm.bt3.databinding.ActivityMainBinding;

import java.util.UUID;

public class MainActivity extends AppCompatActivity {

    private static final String TAG = MainActivity.class.getSimpleName();
    private BluetoothManager mBluetoothManager;
    private BluetoothLeAdvertiser mBluetoothLeAdvertiser;
    private ActivityMainBinding binding;



    @SuppressLint("MissingPermission")
    @RequiresApi(api = Build.VERSION_CODES.O)
    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        View viewRoot = binding.getRoot();
        setContentView(viewRoot);
        Log.d(TAG, "onCreate");

        // get Bluetooth Service Manager
        mBluetoothManager = (BluetoothManager) getSystemService(BLUETOOTH_SERVICE);

        binding.btnOpen.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                stopAdvertising();
                startAdvertising("OP");
            }
        });
        binding.btnClose.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                stopAdvertising();
                startAdvertising("CL");
            }
        });
    }

    @Override
    protected void onDestroy() {
        stopAdvertising();
        super.onDestroy();
        Log.w(TAG, "onDestroy");
    }

    /**
     * Verify the level of Bluetooth support provided by the hardware.
     *
     * @param bluetoothAdapter System {@link BluetoothAdapter}.
     * @return true if Bluetooth is properly supported, false otherwise.
     */
    private boolean checkBluetoothSupport(BluetoothAdapter bluetoothAdapter) {

        if (bluetoothAdapter == null) {
            Log.w(TAG, "Bluetooth is not supported");
            return false;
        }

        if (!getPackageManager().hasSystemFeature(PackageManager.FEATURE_BLUETOOTH_LE)) {
            Log.w(TAG, "Bluetooth LE is not supported");
            return false;
        }

        return true;
    }


    /**
     * Start advertising the data
     *
     */
    @RequiresApi(api = Build.VERSION_CODES.O)
    @SuppressLint("MissingPermission")
    public void startAdvertising(String action) {
        BluetoothAdapter bluetoothAdapter = mBluetoothManager.getAdapter();
        // We can't continue without proper Bluetooth support
        if (!checkBluetoothSupport(bluetoothAdapter)) {
            return;
        }
        mBluetoothLeAdvertiser = bluetoothAdapter.getBluetoothLeAdvertiser();
        if (mBluetoothLeAdvertiser == null) {
            Log.w(TAG, "Failed to create advertiser");
            return;
        }
        // Set advertising setting
        AdvertiseSettings settings = new AdvertiseSettings.Builder()
                .setAdvertiseMode(AdvertiseSettings.ADVERTISE_MODE_LOW_LATENCY)
                .setTxPowerLevel(AdvertiseSettings.ADVERTISE_TX_POWER_HIGH)
                .setTimeout(3000) // disable advertising time limit
                .setConnectable(true) // not connectable - only advertising info
                .build();
        ParcelUuid pUuid = new ParcelUuid(UUID.fromString(getString(R.string.uuid)));
        // Generate data to advertise
        AdvertiseData data = new AdvertiseData.Builder()
                .setIncludeDeviceName(false)
                .setIncludeTxPowerLevel(true)
                .addServiceData(pUuid, action.getBytes())
                .build();
        // Starts advertising.
        mBluetoothLeAdvertiser.startAdvertising(settings, data,mAdvertiseCallback);
    }


    /**
     * Stop advertising the data
     *
     */
    @SuppressLint("MissingPermission")
    public void stopAdvertising() {
        if (mBluetoothLeAdvertiser == null) {
            Log.w(TAG, "advertiser is null");
            return;
        }

        // Stop advertising.

        mBluetoothLeAdvertiser.stopAdvertising(mAdvertiseCallback);
    }


    /**
     * Advertising callback
     */
    private AdvertiseCallback mAdvertiseCallback = new AdvertiseCallback() {
        @Override
        public void onStartSuccess(AdvertiseSettings settingsInEffect) {
            Log.i(TAG, "LE Advertise Started.");
        }

        @Override
        public void onStartFailure(int errorCode) {
            Log.w(TAG, "LE Advertise Failed: " + errorCode);
        }
    };
}