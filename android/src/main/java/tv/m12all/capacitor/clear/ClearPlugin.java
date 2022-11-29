package tv.m12all.capacitor.clear;

import com.getcapacitor.JSObject;
import com.getcapacitor.Logger;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.io.File;

@CapacitorPlugin(name = "Clear")
public class ClearPlugin extends Plugin {
    static boolean deleteDir(final File dir) {
        if (dir != null && dir.isDirectory()) {
            String[] children = dir.list();
            assert children != null;
            for (String child : children) {
                boolean success = deleteDir(new File(dir, child));
                if (!success) {
                    return false;
                }
            }
            return dir.delete();
        } else if (dir != null && dir.isFile()) {
            return dir.delete();
        } else {
            return false;
        }
    }

    @PluginMethod
    public void clearCache(PluginCall call) {
        String message = "Cached cleared";
        File dir = bridge.getContext().getCacheDir();
        if (dir.exists()) {
            deleteDir(dir);
        } else {
            message = "Cached not cleared";
        }
        Logger.debug(getLogTag(), message);
        JSObject ret = new JSObject();
        ret.put("value", message);
        call.resolve(ret);
    }
}
