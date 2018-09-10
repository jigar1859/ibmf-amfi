package com.ibmf.jigarthakkar.amfi.utils;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import okhttp3.CacheControl;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

public class NetworkUtils {
	static OkHttpClient client = new OkHttpClient();
	public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");

	public static String getRequest(String url) {
		Request request = new Request.Builder()
				.cacheControl(new CacheControl.Builder().maxStale(1, TimeUnit.HOURS).build()).url(url).build();
		Response response = null;

		try {
			response = client.newCall(request).execute();
			int statusCode = response.code();
			String responseBody = response.body().string();
			System.out.println("NetworkUtils statusCode:" + statusCode);
			System.out.println("NetworkUtils responseBodyLength:" + responseBody.length());
			return responseBody;
		} catch (IOException ioe) {
			client.connectionPool().evictAll();
			return ioe.getMessage();
		} finally {
			if (response != null) {
				response.body().close();
			}

		}

	}

	public static String postRequest(String url, String json) throws IOException {
		RequestBody body = RequestBody.create(JSON, json);
		Request request = new Request.Builder().url(url).post(body).addHeader("content-type", "application/json")
				.addHeader("cache-control", "no-cache").build();
		Response response = client.newCall(request).execute();
		return response.body().string();

	}
}
